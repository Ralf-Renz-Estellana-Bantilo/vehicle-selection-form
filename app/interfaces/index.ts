export type SelectOptionType = {
   label: string,
   value: string,
}

export type SelectionInputType = {
   className?: string,
   placeholder: string,
   options: SelectOptionType[],
   value: string,
   handleChange: ( e: string ) => void,
   disabled?: boolean
}

export type ModelType = {
   model: string,
   badges: string[],
}

export type MakeType = {
   make: string,
   modelList: ModelType[]
}

export type DataType = {
   make: string,
   modelList: ModelType[]
}

export type FieldType = 'car' | 'model' | 'badge'

export type OptionType = {
   field: FieldType;
   items: string[];
}

export type VariationType = {
   name: string;
   car: string;
   model: string;
   badge: string;
}

export type SessionDataType = {
   car: string,
   model: string,
   badge: string,
   logs: string,
}