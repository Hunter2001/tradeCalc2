export const state = {
  deposit: 0,
  risk: 0,
  stop: 0,
  position: 0,
};

export const setValues = function (data) {
  state.deposit = data.deposit;
  state.risk = data.risk;
  state.stop = data.stop;
};

export const calculatePosition = function () {
  const { deposit, risk, stop } = state;

  // Formula
  let output = (deposit * (risk / 100)) / (stop / 100);
  output = output - output * 0.06;
  output = Math.trunc(output);

  state.position = output;
};

export const copyToClipboard = function (dataToCopy) {
  navigator.clipboard.writeText(dataToCopy);
};
