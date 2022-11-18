export type CoverType = {
  capa: string
}
export type AddressType = {
  id: number
  lat: number
  lng: number
  label: string
}
export type EquipamentType = {
  id: number
  label: string
  total: number
}
export type ImagesType = {
  id: number
  legenda: {
    pt_BR: null
  }
  ordem: number
  src: string
}
export type WorkingHourType = {
  label: string
  is24: boolean
  horario: {
    abre: string
    fecha: string
  }
}
export type PhoneType = {
  id: number
  nome: string
  whatsapp: boolean
  ordem: number
  number: string
}
export type CategoryType = {
  id: number
  label: string
}
export type StructureType = {
  icone: string
  label: string
}
export type NetworkType = {
  nome: string
  icone: string
  url: string
  user: string
}
export type PaymentType = {
  icone: string
  label: string
}
export type RestrictionType = {
  icone: string
  label: string
}
export type TavellersType = {
  label: string
}
export type MealType = {
  label: string
}
export type CookType = {
  label: string
}
export type SpaceType = {
  id: number
  espaco_id: number
  nome: string
  descricao: string
  area: number
  pe_direito: number
  medidas: string
  capacidade: number
  ordem: number
}

// export type PanoramicType = {
//     panoramas: []
// },

export type ItemType = {
  id: number | string
  nome: string
  email: string
  site: string
  datahora_inicio_f: string
  datahora_fim_f: string
  is_delivery: number
  gratuito: number
  capa: string | undefined
  descricao_t: string | null
  quartos: number
  leitos: number
  dicas_t: string
  cafe_manha: boolean
  cafe_hospedes: boolean
  almoco: boolean
  almoco_hospedes: boolean
  jantar: boolean
  jantar_hospedes: boolean
  viajantes: TavellersType[]
  addresses: AddressType[]
  categorias: CategoryType[]
  images: ImagesType[]
  estruturas: StructureType[]
  redes: NetworkType[]
  formas_pagamento: PaymentType[]
  restricoes: RestrictionType[]
  phones: PhoneType[]
  horario_funcionamento: WorkingHourType[]
  refeicoes: MealType[]
  cozinhas: CookType[]
  equipamentos: EquipamentType[]
  espacos: SpaceType[]
}
