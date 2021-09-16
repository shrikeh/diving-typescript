/**
 * @jest-environment node
 */
import { emptyDir, readFileSync } from "fs-extra";
import { resolve } from "path";
import { sprintf } from 'sprintf-js';
import axios from "axios";
import { pactWith } from "jest-pact";
import { InteractionObject, Publisher } from "@pact-foundation/pact";
import { HTTPMethod } from "@pact-foundation/pact/src/common/request";

import { AxiosKitRepository } from "~app/Repository/Kit";
import { HalItemFactory } from "~app/Hal/ItemFactory/HalItemFactory";
import { HalManufacturerFactory } from "~app/Hal/ManufacturerFactory/HalManufacturerFactory";
import { HalPurchaseInfoFactory } from "~app/Hal/PurchaseInfoFactory/HalPurchaseInfoFactory";
import { like, term } from "@pact-foundation/pact/src/dsl/matchers";

const __pactsDir = (global as any).__pactsDir;

pactWith(
  {
    consumer: "Shrikeh.net Diving Kit Consumer",
    provider: "Shrikeh.net Diving Kit Provider",
    log: resolve((global as any).__logsDir, "pact/pact.log"),
    dir: __pactsDir,
    logLevel: "debug",
    pactfileWriteMode: "merge"
  },
  provider => {
    describe("KitItem test", () => {
      const commonResponseHeaders = {
        "content-type": "application/hal+json"
      };

      const commonRequestHeaders = {
        Accept: term({
          matcher: 'application/(hal\\+)?json',
          generate: "application/hal+json"
        })
      };

      const halItemFactory = new HalItemFactory(
        new HalManufacturerFactory(),
        new HalPurchaseInfoFactory()
      );

      it("Loads a Kit Item", async () => {
        const kitItemExpectedRequest = {
          method: HTTPMethod.GET,
          path: "/kit/ri-2-100-drysuit",
          headers: commonRequestHeaders
        };

        const repo = new AxiosKitRepository(axios.create({
          baseURL: provider.mockService.baseUrl,
          headers: {
            Accept: "application/hal+json",
          }
        }), halItemFactory);

        const kitItemResponse = {
          status: 200,
          headers: commonResponseHeaders,
          body: like(JSON.parse(readFileSync(resolve((global as any).__fixturesDir, "KitItem.json")).toString()))
        };

        const interaction: InteractionObject = {
          state: "I have an existing Kit Item",
          uponReceiving: "a request for a kit item",
          withRequest: kitItemExpectedRequest,
          willRespondWith: kitItemResponse
        };

        await provider.addInteraction(interaction);

        const kitItem = await repo.fetchBySlug("ri-2-100-drysuit");
        expect(kitItem.getName()).toBe('Ri 2-100 Drysuit');
      });

      it('Throws an exception if the kit item does not exist', async () => {
        const repo = new AxiosKitRepository(axios.create({
          baseURL: provider.mockService.baseUrl,
          headers: {
            Accept: "application/hal+json"
          }
        }), halItemFactory);

        const kitItemExpectedRequest = {
          method: HTTPMethod.GET,
          path: "/kit/foo-bar-baz",
          headers: commonRequestHeaders
        };

        const kitItemResponse = {
          status: 404,
          headers: commonResponseHeaders,
          body: {
            code: 404,
            message: "Kit item not found"
          }
        };

        const interaction: InteractionObject = {
          state: "The kit Item does not exist",
          uponReceiving: "a request for a kit item",
          withRequest: kitItemExpectedRequest,
          willRespondWith: kitItemResponse
        };

        await provider.addInteraction(interaction);
        await expect(repo.fetchBySlug("foo-bar-baz")).rejects.toThrowError();
      });

      beforeAll(async () => {
        await emptyDir(__pactsDir);
      });

      afterAll(() => {
        const pactBrokerPort = process.env.PACT_BROKER_HOST_PORT as string;
        new Publisher({
          pactFilesOrDirs: [ __pactsDir ],
          pactBroker: sprintf("http://localhost:%s", pactBrokerPort),
          consumerVersion: "1.0.0"
        }).publishPacts();
      });
    });
  }
);

