import { tezos } from "./tezos";
export const buyTicketOperation = async () => {
  try {
    const contract = await tezos.wallet.at(
      "KT1WT6AjrzNhUqXZgc2JVE8bvRgb9WmkUXrT"
    );
    const op = contract.methods.buy_ticket().send({
      amount: 1,
      mutez: true,
    });
    await (await op).confirmation(1);
  } catch (error) {
    throw error;
  }
};

export const endGameOperation = async () => {
  try {
    const contract = await tezos.wallet.at(
      "KT1WT6AjrzNhUqXZgc2JVE8bvRgb9WmkUXrT"
    );
    const op = contract.methods.end_game().send();
    await (await op).confirmation(1);
  } catch (error) {
    throw error;
  }
};
