/**
 * @jest-environment node
 */
import { pactWith } from "jest-pact";
import { InteractionObject, Publisher } from "@pact-foundation/pact";

import { HTTPMethod } from "@pact-foundation/pact/src/common/request";
import { resolve } from "path";
import axios from "axios";
import { AxiosKitRepository } from "~app/Repository/Kit";
import { HalItemFactory } from "~app/Hal/ItemFactory/HalItemFactory";
import { HalManufacturerFactory } from "~app/Hal/ManufacturerFactory/HalManufacturerFactory";
import { HalPurchaseInfoFactory } from "~app/Hal/PurchaseInfoFactory/HalPurchaseInfoFactory";
import { readFileSync } from "fs";
import { sprintf } from 'sprintf-js';

const __pactsDir = (global as any).__pactsDir;

pactWith(
  {
    consumer: "Shrikeh.net Diving Kit Consumer",
    provider: "Shrikeh.net Diving Kit Provider",
    log: resolve((global as any).__logsDir, "pact/pact.log"),
    dir: __pactsDir,
    logLevel: "debug"
  },
  provider => {
    describe("KitItem test", () => {
      const commonHeaders = {
        "Age": "24",
        "Content-Type": "application/hal+json",
        "Cache-Control": "public, max-age=604800, immutable",
        "Last-Modified": "Wed, 21 July 2021 07:28:00 GMT",
        "Content-Security-Policy": "default-src 'self'; report-uri https://report.shrikeh.net/csp",
        "Cross-Origin-Resource-Policy": "same-origin",
        "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
        "Expires": "Wed, 21 Oct 2022 07:28:00 GMT",
      };

      const halItemFactory = new HalItemFactory(
        new HalManufacturerFactory(),
        new HalPurchaseInfoFactory()
      );

      it("Loads a Kit Item", async () => {
        const kitItemExpectedRequest = {
          method: HTTPMethod.GET,
          path: "/kit/ri-2-100-drysuit",
          headers: {
            Accept: "application/hal+json"
          }
        };

        const repo = new AxiosKitRepository(axios.create({
          baseURL: provider.mockService.baseUrl,
          headers: {
            Accept: "application/hal+json",
          }
        }), halItemFactory);

        const kitItemResponse = {
          status: 200,
          headers: {
            ...commonHeaders,
            "Etag": "169-ZvbJQlMiJ0Z/SvJhPuvYWPLgCiU",
            "Link": '<https://virtserver.swaggerhub.com/shrikeh/Diving2/1.0.0/kit/some-item-slug>; rel="canonical"',
          },
          body: JSON.parse(
            readFileSync(resolve((global as any).__fixturesDir, "KitItem.json")).toString()
          )
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
            Accept: "application/hal+json",
          }
        }), halItemFactory);

        const kitItemExpectedRequest = {
          method: HTTPMethod.GET,
          path: "/kit/foo-bar-baz",
          headers: {
            Accept: "application/hal+json"
          }
        };

        const kitItemResponse = {
          status: 404,
          headers: {
            ...commonHeaders,
            "Etag": "169-ZvbJQlMiJ0Z/SvJhPuvYWPLgCiU"
          },
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

