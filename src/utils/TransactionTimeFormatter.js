export function transactionTimeFormatter(dateandtimestamp) {
  /*TODO:Replace this with moment js */
  if (dateandtimestamp) {
    try {
      const timestampWithZulu = dateandtimestamp.split("T");
      if (timestampWithZulu.length < 2) {
        throw Error(
          "date and time stamp is not in the proper format: {YYYY-MM-DD}T{HH:MM:SS}Z"
        );
      }
      const timestamp = timestampWithZulu[1].split("Z");
      return timestamp[0];
    } catch (error) {
      console.error(error);
    }
  }
}
