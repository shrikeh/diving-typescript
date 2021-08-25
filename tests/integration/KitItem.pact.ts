/**
 * @jest-environment node
 */
import { pactWith } from "jest-pact";
import { InteractionObject, Matchers } from "@pact-foundation/pact";

import { HTTPMethod } from "@pact-foundation/pact/src/common/request";
import { resolve } from "path";
import axios from "axios";
import { AxiosKitRepository } from "~app/Repository/Kit";
import { HalItemFactory } from "~app/Hal/ItemFactory/HalItemFactory";
import { HalManufacturerFactory } from "~app/Hal/ManufacturerFactory/HalManufacturerFactory";
import { HalPurchaseInfoFactory } from "~app/Hal/PurchaseInfoFactory/HalPurchaseInfoFactory";
import { readFileSync } from "fs";

pactWith(
  {
    consumer: "Jest Consumer Example",
    provider: "Jest Provider Example",
    log: resolve((global as any).__logsDir, "pact/pact.log"),
    dir: (global as any).__pactsDir,
    logLevel: "debug"
  },
  provider => {
    describe("KitItem test", () => {
      const kitItemExpectedRequest = {
        method: HTTPMethod.GET,
        path: "/item/ri-2-100-drysuit",
        headers: {
          Accept: "application/hal+json"
        }
      };

      const expectedBody = JSON.parse(
        readFileSync(resolve((global as any).__fixturesDir, "KitItem.json")).toString()
      );

      const kitItemResponse = {
        status: 200,
        headers: {
          "Age": "24",
          "Content-Type": "application/hal+json",
          "Cache-Control": "public, max-age=604800, immutable",
          "Etag": "169-ZvbJQlMiJ0Z/SvJhPuvYWPLgCiU",
          "Expires": "Wed, 21 Oct 2022 07:28:00 GMT",
          "Link": '<https://virtserver.swaggerhub.com/shrikeh/Diving2/1.0.0/kit/some-item-slug>; rel="canonical"',
          "Last-Modified": "Wed, 21 July 2021 07:28:00 GMT",
          "Content-Security-Policy": "default-src 'self'; report-uri https://report.shrikeh.net/csp",
          "Cross-Origin-Resource-Policy": "same-origin",
          "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload"
        },
        body: expectedBody
      };

      beforeEach(() => {
        const interaction: InteractionObject = {
          state: "i have a list of dogs",
          uponReceiving: "a request for a kit item",
          withRequest: kitItemExpectedRequest,
          willRespondWith: kitItemResponse
        };

        return provider.addInteraction(interaction);
      });

      it("Does stuff", async () => {
        const halItemFactory = new HalItemFactory(
          new HalManufacturerFactory(),
          new HalPurchaseInfoFactory()
        );
        const repo = new AxiosKitRepository(axios.create({
          baseURL: provider.mockService.baseUrl,
          headers: {
            Accept: "application/hal+json",
          }
        }), halItemFactory);

        const kitItem = await repo.fetchBySlug("ri-2-100-drysuit");
        console.log(kitItem);
      });

    });
  }
);

