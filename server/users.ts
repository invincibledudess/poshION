import { ORDER } from './order';

export const USERS = {
    surjeet: {
        id: 1000,
        role: 'vendor',
        name: 'Surjeet',
        email: 'surjeet@iongroup.com',
        password: 'surjeet_pwd',
        prefferedNumber: 9090887761
    },
    shantnu: {
        id: 1001,
        role: 'customer',
        name: 'Shantnu',
        email: 'shantnu@iongroup.com',
        password: 'shantnu_pwd',
        prefferedNumber: 9090887762,
        pastOrders: [ORDER[2001]],
    },
    kashif: {
        id: 1002,
        role: 'customer',
        name: 'Kashif',
        email: 'kashif@iongroup.com',
        password: 'kashif_pwd',
        prefferedNumber: 9090887763,
        pastOrders: [ORDER[2003], ORDER[2004]],
    },
    devanshu: {
        id: 1003,
        role: 'customer',
        name: 'Devanshu',
        email: 'devanshu@iongroup.com',
        password: 'devanshu_pwd',
        prefferedNumber: 9090887764,
        pastOrders: [ORDER[2002]],
    },
    neha: {
        id: 1004,
        role: 'customer',
        name: 'Neha',
        email: 'neha@iongroup.com',
        password: 'neha_pwd',
        prefferedNumber: 9090887764,
        pastOrders: [],
    },
}