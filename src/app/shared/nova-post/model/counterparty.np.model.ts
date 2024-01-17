export interface CounterpartyResponse {
  "success": boolean;
  "data": CounterpartyInfo[];
  "errors": [];
  "warnings": [];
  "info": [];
  "messageCodes": [];
  "errorCodes": [];
  "warningCodes": [];
  "infoCodes": [];
}

export interface CounterpartyInfo {
  "Ref": string;
  "Description": string;
  "FirstName": string;
  "MiddleName": string;
  "LastName": string;
  "Counterparty": string;
  "OwnershipForm": string;
  "OwnershipFormDescription": string;
  "EDRPOU": string;
  "CounterpartyType": string;
  "ContactPerson": CounterpartyContactPersonInfo
}

export interface CounterpartyContactPersonInfo {
  "success": true,
  "data": [
    {
      "Ref": string;
      "Description": string;
      "LastName": string;
      "FirstName": string;
      "MiddleName": string;
    }
  ],
  "errors": [],
  "translatedErrors": [],
  "warnings": [],
  "info": [],
  "messageCodes": [],
  "errorCodes": [],
  "warningCodes": [],
  "infoCodes": []
}


export interface CreateCounterpartyReq {
  "apiKey": string;
  "modelName": string;
  "calledMethod": string;
  "methodProperties": {
    "SenderWarehouseIndex": string;
    "RecipientWarehouseIndex": string;
    "PayerType": 'Sender' | 'Recipient' | 'ThirdPerson'
    "PaymentMethod": 'NonCash' | 'Cash'
    "DateTime": string;
    "CargoType": string;
    "Weight": string;
    "ServiceType": 'DoorsDoors' | 'DoorsWarehouse' | 'WarehouseWarehouse' | 'WarehouseDoors'
    "SeatsAmount": string;
    "Description": string;
    "Cost": string;
    "CitySender": string;
    "Sender": string;
    "SenderAddress": string;
    "ContactSender": string;
    "SendersPhone": string;
    "CityRecipient": string;
    "Recipient": string;
    "RecipientAddress": string;
    "ContactRecipient": string;
    "RecipientsPhone": string;
  }
}
