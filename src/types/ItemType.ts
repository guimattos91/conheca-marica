export type CoverType = {
  capa: string
}
export type AddressType = {
  id: number
  lat: number
  lng: number
  label: string
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

// export type PanoramicType = {
//     panoramas: []
// },

export type ItemType = {
  id: number | string
  nome: string
  email: string
  site: string
  capa: string | undefined
  descricao_t: string | null
  quartos: number
  leitos: number
  dicas_t: string
  viajantes: TavellersType[]
  cafe_manha: boolean
  cafe_hospedes: boolean
  almoco: boolean
  almoco_hospedes: boolean
  jantar: boolean
  jantar_hospedes: boolean
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
  is_delivery: number
}
