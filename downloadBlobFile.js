import download from "./common";

const downloadBlobFile = (data, fileName) => {
  let blob = new Blob([data], {
    type: data?.type
  });
  download(blob, fileName);
};

export default downloadBlobFile;
