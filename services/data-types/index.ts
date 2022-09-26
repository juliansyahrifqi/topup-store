export interface CategoryTypes {
    _id: string;
    name: string;
    __v: number;
}

export interface GameItemTypes {
    _id: string;
    _status: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface BanksTypes {
    _id: string;
    name: string;
    noRekening: string;
    bankName: string;
}

export interface PaymentTypes {
    _id: string;
    type:string;
    status: string;
    banks: BanksTypes[]
}

export interface NominalsTypes {
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}
