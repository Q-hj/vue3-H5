// * 统一消息提醒组件的调用

// import { ElMessage } from 'element-plus';
// import { Message, Modal, ModalConfig } from "@arco-design/web-vue";
// import { Toast } from 'vant';//vant3-vue2
import { showToast, showSuccessToast, showFailToast } from 'vant'; //vant4-vue3

const vant4Message = (type, message) =>
	showToast({
		type,
		message,
		iconSize: '2em',
		duration: 1500,
		// wordBreak
	});

const Message = {
	success: (message) => vant4Message('success', message),
	error: (message) => vant4Message('fail', message),
};

//  const message = {
// 		success: ElMessage.success,
// 		error: ElMessage.error,
// 	};

export default Message;
