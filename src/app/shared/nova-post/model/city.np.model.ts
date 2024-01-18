export interface CityResponse {
  "success": boolean;
  "data": CityInfo[];
  "errors": [];
  "warnings": [];
  "info": [];
  "messageCodes": [];
  "errorCodes": [];
  "warningCodes": [];
  "infoCodes": [];
}

export interface CityInfo {
  "Description": string;
  "DescriptionRu": string;
  "Ref": string;
  "Delivery1": '0' | '1';
  "Delivery2": '0' | '1';
  "Delivery3": '0' | '1';
  "Delivery4": '0' | '1';
  "Delivery5": '0' | '1';
  "Delivery6": '0' | '1';
  "Delivery7": '0' | '1';
  "Area": string;
  "SettlementType": string;
  "IsBranch": '0' | '1';
  "PreventEntryNewStreetsUser": '0' | '1' | "null";
  "Conglomerates": string;
  "CityID": string;
  "SettlementTypeDescriptionRu": string;
  "SettlementTypeDescription": string;
}