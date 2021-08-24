import { promises as fs } from 'fs';
import { load, Root } from 'protobufjs';
import { __messagesDir, __fixturesDir } from "../../../../env";
import { resolve } from "path";

export async function testing(): Promise<string> {

  const root = await load(resolve(__messagesDir, 'kit_item.proto'));

  const KitItem = (root as Root).lookupType("diving.KitItem");
  const payload = await fs.readFile(resolve(__fixturesDir, 'KitItem.json'));
  const data = JSON.parse(payload.toString());

  try {
    console.log(KitItem.verify(data));
    const encodedMessage = KitItem.encode(data).finish();
    return Buffer.from(encodedMessage).toString('hex');
  } catch (e) {
    throw e;
  }
}


