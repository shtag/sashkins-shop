type Modify<T, R> = Omit<T, keyof R> & R;

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

export type WarehouseResponse = Modify<CityResponse, {
  "data": WarehouseInfo[]
}>
export interface WarehouseInfo {
  "SiteKey": "10119";
  "Description": string;
  "DescriptionRu": string;
  "ShortAddress": string;
  "ShortAddressRu": string;
  "Phone": string;
  "TypeOfWarehouse": string;
  "Ref": string;
  "Number": "1";
  "CityRef": string;
  "CityDescription": string;
  "CityDescriptionRu": string;
  "SettlementRef": string;
  "SettlementDescription": string;
  "SettlementAreaDescription": string;
  "SettlementRegionsDescription": string;
  "SettlementTypeDescription": string;
  "SettlementTypeDescriptionRu": string;
  "Longitude": string;
  "Latitude": string;
  "PostFinance": '0' | '1';
  "BicycleParking": '0' | '1';
  "PaymentAccess": '0' | '1';
  "POSTerminal": '0' | '1';
  "InternationalShipping": '0' | '1';
  "SelfServiceWorkplacesCount": '0' | '1';
  "TotalMaxWeightAllowed": string;
  "PlaceMaxWeightAllowed": string;
  "SendingLimitationsOnDimensions": {
    "Width": 170;
    "Height": 170;
    "Length": 300
  },
  "ReceivingLimitationsOnDimensions": {
    "Width": 170;
    "Height": 170;
    "Length": 300
  },
  "Reception": DeliveryTime,
  "Delivery": DeliveryTime,
  "Schedule": DeliveryTime,
  "DistrictCode": string;
  "WarehouseStatus": string;
  "WarehouseStatusDate": string;
  "CategoryOfWarehouse": "Branch" | "Postomat";
  "RegionCity": string;
  "WarehouseForAgent": '0' | '1';
  "MaxDeclaredCost": string;
  "DenyToSelect": '0' | '1';
  "PostMachineType": "None" | 'FullDayService' | 'PartTime' | 'ForResidentOfEntrance' | 'Private' | 'LimitedAccess';
  "PostalCodeUA": string;
  "OnlyReceivingParcel": '0' | '1';
  "WarehouseIndex": string;
}

interface DeliveryTime {
  "Monday": string;
  "Tuesday": string;
  "Wednesday": string;
  "Thursday": string;
  "Friday": string;
  "Saturday": string;
  "Sunday": string;
}