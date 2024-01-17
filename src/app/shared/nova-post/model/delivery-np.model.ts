export interface CreateParcelReq {
  "apiKey": string;
  "modelName": "InternetDocument";
  "calledMethod": "save";
  "methodProperties": {
    "PayerType": 'Sender' | 'Recipient' | 'ThirdPerson'
    "PaymentMethod": 'Cash' | "NonCash";
    "DateTime": string;
    "CargoType": "Cargo" | "Parcel";
    "Weight": string;
    "ServiceType": 'DoorsDoors' | 'DoorsWarehouse' | 'WarehouseWarehouse' | 'WarehouseDoors'
    "SeatsAmount": string;
    "Description": string;
    "Cost": string;
    "CitySender": string; // ref
    "Sender": string; // ref
    "SenderAddress": string; // ref
    "ContactSender": string; // ref
    "SendersPhone": string;
    "RecipientsPhone": string;
    "NewAddress": string;
    "RecipientCityName": string;
    "RecipientArea": string;
    "RecipientAreaRegions": string;
    "RecipientAddressName": string;
    "RecipientHouse": string;
    "RecipientFlat": string;
    "RecipientName": string; // lastname name middlename
    "RecipientType": "PrivatePerson";
    "SettlementType": string;
    "RecipientContactName": string; // lastname name middlename
    "EDRPOU": string;
    "BackwardDeliveryData"?: BackwardDeliveryData[];
    "OptionsSeat": OptionSeat[]
  }
}


export interface CreateParcelRes {
  "success": true,
  "data": [
    {
      "Ref": string;
      "CostOnSite": number;
      "EstimatedDeliveryDate": string;
      "IntDocNumber": "20450850579610",
      "TypeDocument": "InternetDocument"
    }
  ],
  "errors": string[],
  "warnings": string[],
  "info": string[],
  "messageCodes": string[],
  "errorCodes": string[],
  "warningCodes": string[],
  "infoCodes": string[]
}

export interface BackwardDeliveryData {
  "PayerType": "Recipient",
  "CargoType": "Money",
  "RedeliveryString": "255"
}


export interface OptionSeat {
  "volumetricVolume": string;
  "volumetricWidth": string;
  "volumetricLength": string;
  "volumetricHeight": string;
  "weight": string;
}