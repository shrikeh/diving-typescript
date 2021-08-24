import { pactWith } from "jest-pact";
import { InteractionObject, Matchers } from "@pact-foundation/pact";

import { HTTPMethod } from '@pact-foundation/pact/src/common/request';
import { resolve } from "path";
import axios from 'axios';

pactWith(
  {
    consumer: "Jest Consumer Example",
    provider: "Jest Provider Example",
    log: resolve((global as any).__logsDir, "pact/pact.log"),
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

      const kitItemResponse = {
        status: 200,
        headers: {
          'Age': '24',
          "Cache-Control": "public, max-age=604800, immutable",
          'Etag': '169-ZvbJQlMiJ0Z/SvJhPuvYWPLgCiU',
          'Expires': 'Wed, 21 Oct 2022 07:28:00 GMT',
          'Link': '<https://virtserver.swaggerhub.com/shrikeh/Diving2/1.0.0/kit/some-item-slug>; rel="canonical"',
          'Last-Modified': 'Wed, 21 July 2021 07:28:00 GMT',
          'Content-Security-Policy': "default-src 'self'; report-uri https://report.shrikeh.net/csp",
          'Cross-Origin-Resource-Policy': 'same-origin',
          'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload'
        }
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

      it('Does stuff', async () => {
        const result = await axios.request({
          baseURL: provider.mockService.baseUrl,
          headers: {
            Accept: "application/hal+json",
          },
          url: "/item/ri-2-100-drysuit",
          method: 'GET'
        }).then(response => response.data);

        console.log(result);
      });

    });
  }
);

