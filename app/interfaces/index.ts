export type SelectOptionType = {
   label: string,
   value: string,
}

export type SelectionInputType = {
   className?: string,
   placeholder: string,
   options: SelectOptionType[],
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