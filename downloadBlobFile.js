import get from 'lodash/get';

const downloadBlobFile = (res, fileName) => {
  let blob = new Blob([res], {
    type: get(res, 'type')
  });
  let objectUrl = URL.createObjectURL(blob);
  let a = document.createElement('a'); // 生成一个a元素
  let event = new MouseEvent('click'); // 创建一个单击事件
  a.download = fileName; // 设置文件名称
  a.href = objectUrl; // 将生成的URL设置为a.href属性
  a.dispatchEvent(event); // 触发a的单击事件
};

export default downloadBlobFile;
