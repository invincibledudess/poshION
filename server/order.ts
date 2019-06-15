import { ORDER_ITEM } from './orderItem';
import { USERS } from './users';
import { ORDER_REVIEW } from './orderReview';

export const ORDER = {
  2001: {
    orderItem: [ORDER_ITEM[3001], ORDER_ITEM[3002], ORDER_ITEM[3003], ORDER_ITEM[3004], ORDER_ITEM[3005] ],
    orderStatus: '',
    userRemark: 'This is the user remark against my first order',
    paymentMode: 'CASH',
    user: USERS[1001],
    rejectionRemark: '',
    createTime: 1560515952046,
    tentativeCompletionTime: 0,
    completeTime: 0,
    cancellationRemark: '',
    review: ORDER_REVIEW[8005]
  },  
  2002: {
    orderItem: [ORDER_ITEM[3003], ORDER_ITEM[3004] ],
    orderStatus: '',
    userRemark: '',
    paymentMode: 'CASH',
    user: USERS[1003],
    rejectionRemark: '',
    createTime: 1560515952050,
    tentativeCompletionTime: 300000,
    completeTime: 0,
    cancellationRemark: '',
    review: ORDER_REVIEW[8004]
  },  
  2003: {
    orderItem: [ORDER_ITEM[3004] ],
    orderStatus: '',
    userRemark: 'This is the user remark against third order.',
    paymentMode: 'CASH',
    user: USERS[1002],
    rejectionRemark: 'No raw material for this order.',
    createTime: 1560515952150,
    tentativeCompletionTime: 0,
    completeTime: 0,
    cancellationRemark: '',
    review: ORDER_REVIEW[8003]
  },  
  2004: {
    orderItem: [ORDER_ITEM[3001] ],
    orderStatus: '',
    userRemark: 'This is the user remark against third order.',
    paymentMode: 'CASH',
    user: USERS[1002],
    rejectionRemark: '',
    createTime: 156051595266,
    tentativeCompletionTime: 330000,
    completeTime: 0,
    cancellationRemark: 'Wait time was just too much',
    review: ORDER_REVIEW[8002]
  }

  ,  
  2005: {
    orderItem: [ORDER_ITEM[3001] ],
    orderStatus: '',
    userRemark: 'This is the user remark against fifth order.',
    paymentMode: 'CASH',
    user: USERS[1004],
    rejectionRemark: '',
    createTime: 1560515952046,
    tentativeCompletionTime: 30000,
    completeTime: 1560516986485,
    cancellationRemark: '',
    review: ORDER_REVIEW[8001]
  }
};
