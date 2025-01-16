// 題目 - 樂呵呵健身房
const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

console.log('-----第一階段：新增課程購買記錄（優惠定價）-----');
// 第一階段：新增課程購買記錄（優惠定價）
/**
 * 撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格：
 * 
 * 購買數量 / 單價 (每堂課)
 * 1-10 堂 / 1500 元
 * 11-20 堂 / 1300 元
 * 21 堂以上 / 1100 元
 * 
 * 記錄內容：
 * 1.會員名稱 (name)：字串
 * 2.購買課程數量 (courses)：數字
 * 3.課程單價（自動計算）
 * 4.總金額（courses × 單價）
 * 
 * 功能要求：
 * 使用陣列 purchaseRecords 儲存每筆記錄。
 * 如果輸入無效（如名稱為空或數值不正確），提示輸入錯誤，並不儲存該記錄。
 * 成功新增後，印出「新增購買記錄成功！會員 [會員名稱] 購買 [數量] 堂課，總金額為 [金額] 元。」
 */
let purchaseRecords = [];
const checkNameInput = (memberName) => members.includes(memberName);

const checkQtyInput = (courseQty) => (Number.isInteger(courseQty) && courseQty > 0) ? true : false;

const getLessonPrice = (courseQty) => {
    let lessonUnitPrices = [1500, 1300, 1100];
    if (courseQty <= 10) {
        return lessonUnitPrices[0]
    } else if (courseQty <= 20) {
        return lessonUnitPrices[1]
    } else {
        return lessonUnitPrices[2]
    }
}

function addPurchaseRecord(name, courses) {
    let isValidInput = checkNameInput(name) && checkQtyInput(courses) ? true : false;

    if (isValidInput) {
        let lessonPrice = getLessonPrice(courses);
        let sumPrice = lessonPrice * courses;
        purchaseRecords.push({
            name,
            courses,
            lessonPrice,
            sumPrice
        });
        console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${sumPrice} 元。`);

    } else {
        console.log('輸入錯誤，請輸入有效的會員名稱和課程數量。');
    }
}

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");
// console.log(purchaseRecords);

console.log('-----第二階段：計算目前的總營業額-----');
// 第二階段：計算目前的總營業額
/**
 * 新增函式 calculateTotalPrice，計算目前的總營業額為多少。
 * 印出 console.log 文字為 目前總營業額為 ${totalPrice} 元
 */

function calculateTotalPrice() {
    let totalPrice = purchaseRecords.reduce((acc, record) => acc += record.sumPrice, 0);

    console.log(`目前總營業額為 ${totalPrice} 元`);
}

calculateTotalPrice();

console.log('-----第三階段：篩選出還沒有購課的會員-----');
// 第三階段：篩選出還沒有購課的會員
/**
 * 新增函式 filterNoPurchaseMember，篩選特定條件的會員記錄。例如：未購買過課程的會員，並依序列出
 * 印出 console.log 文字為 未購買課程的會員有：.......
 */

function filterNoPurchaseMember() {
    let noPurchaseMembers = new Array;
    noPurchaseMembers = [...members];
    purchaseRecords.forEach(record => {
        const { name } = record;
        noPurchaseMembers = noPurchaseMembers.filter(member => member !== name);
    });

    let noPurchaseMemberList = '';
    noPurchaseMembers.forEach(member => noPurchaseMemberList += `${member} `)
    console.log(`未購買課程的會員有：${noPurchaseMemberList}`);
}

filterNoPurchaseMember();