//根据间隔生成数组
export const initializeArrayWithRange = (end,start = 0,step = 1) => Array.from({length:Math.ceil((end-start+1)/step)},(value,index) => index*step+start);
//initializeArrayWithRange(9, 0, 2);
