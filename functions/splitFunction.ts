export const splitPerPersonFunction = (data: any) => {
  const clonedArray = JSON.parse(JSON.stringify(data));
  let newArray = [];
  let positiveBalances = clonedArray.filter((acc: any) => acc?.amount >= 0);
  let negativeBalances = clonedArray.filter((acc: any) => acc?.amount < 0);

  while (positiveBalances.length > 0 && negativeBalances.length > 0) {
    let posBalance = JSON.parse(JSON.stringify(positiveBalances[0]));
    let negBalance = JSON.parse(JSON.stringify(negativeBalances[0]));
    const obj = {
      paid_to: posBalance.user,
      paid_by: negBalance.user,
      amount: Math.min(posBalance.amount, Math.abs(negBalance.amount)),
    };
    newArray.push(obj);
    if (posBalance.amount === Math.abs(negBalance.amount)) {
      positiveBalances.shift();
      negativeBalances.shift();
    } else if (posBalance.amount > Math.abs(negBalance.amount)) {
      positiveBalances[0].amount -= Math.abs(negBalance.amount);
      negativeBalances.shift();
    } else {
      negativeBalances[0].amount += posBalance.amount;
      positiveBalances.shift();
    }
  }
  return newArray;
};

export const splitGroupBalances = (data: any) => {
  const splitBalances = [] as any;
  data?.forEach((transactionItem: any) => {
    const indexOfElement = splitBalances.findIndex((element: any) => element.user._id.toString() === transactionItem.paid_by._id.toString());
    if (indexOfElement === -1) {
      splitBalances.push({
        user: transactionItem.paid_by,
        amount: transactionItem.total_cost,
      });
    } else {
      splitBalances[indexOfElement].amount += transactionItem.total_cost;
    }
    transactionItem.split.forEach((splitItem: any) => {
      const splitIndex = splitBalances.findIndex((element: any) => element.user._id.toString() === splitItem.user._id.toString());
      if (splitIndex === -1) {
        splitBalances.push({
          user: splitItem.user,
          amount: -splitItem.amount,
        });
      } else {
        splitBalances[splitIndex].amount -= splitItem.amount;
      }
    });
  });

  splitBalances.forEach((splitItem: any) => {
    splitItem.amount = parseFloat(splitItem.amount.toFixed(2));
  });

  return splitBalances;
};
