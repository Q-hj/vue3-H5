// * 统一消息提醒组件的调用

// import { Message, Modal, ModalConfig } from "@arco-design/web-vue";
// import { Toast } from 'vant';//vant3-vue2
import { showToast, showSuccessToast, showFailToast } from 'vant'; //vant4-vue3

// import { ElMessage } from 'element-plus';

const Message = {
	success: showSuccessToast,
	error: showFailToast,
};

//  const message = {
// 		success: ElMessage.success,
// 		error: ElMessage.error,
// 	};

export default Message;
