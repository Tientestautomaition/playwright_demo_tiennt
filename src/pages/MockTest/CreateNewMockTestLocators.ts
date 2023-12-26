export const CreateNewMockTestLocators = {
    mockTestManagementMenu: "//span[contains(text(),'Quản lý Đề thi')]/parent::button",
    mockTestList: "//span[contains(text(),'Danh sách đề thi')]/parent::a",
    mockTestListTitle: "//span[@class='ant-breadcrumb-link'][.='Danh sách đề thi']",
    createMockTestBtn: "//button[contains(text(),'Thêm mới')]",
    createMockTestTitle: "//span[contains(text(),'TẠO MỚI ĐỀ THI')]",
    nameMockTestTxt: "(//input[@id='name'])[3]",
    mockTestTypeDropdown: "//span[contains(text(),'Chọn dạng đề thi')]/parent::div",
    childXpathMockTestTypeDropdown: "//div[@class='ant-select-item-option-content']",
    contestCandidatesDropdown: "//span[contains(text(),'Chọn đối tượng dự thi')]/parent::div",
    childXpathContestCandidatesDropdown: "//div[@class='ant-select-item-option-content']",
    correctScoreRadioBtn: "//span[contains(text(),'Điểm chính xác')]",
    saveBtn: "//button[contains(text(),'Lưu')]",
    msgCreateMockTestSuccess: "//div[@class='Toastify']//div[contains(text(),'Tạo mới đề thi!')]"
};