import download from "./common";

const saveJSON = (data, fileName = '下载文件.json') => {
  if (!data) {
    alert('保存的数据为空');
    return;
  }
  const blob = new Blob([JSON.stringify(data, undefined, 2)], { type: 'text/json' });
  download(blob, fileName);
};

export default saveJSON;
