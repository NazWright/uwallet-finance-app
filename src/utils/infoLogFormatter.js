export const infoLogFormatter = (logMessage) => {
  return console.info("------- Info from UI: " + logMessage);
};

export const errorLogFormatter = (logMessage) => {
  return console.error("-------- Error from UI: " + logMessage);
};
