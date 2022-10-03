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
export type HourType = {
  horario_funcionamento: [
    {
      label: string
      is24: boolean
      horario: {
        abre: string
        fecha: string
      }
    },
  ]
}
export type PhoneType = {
  phones: [
    {
      id: number
      nome: string
      whatsapp: boolean
      ordem: number
      number: string
    },
  ]
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
export type MealType = {
  restricoes: [
    {
      label: string
    },
  ]
}
// export type PanoramicType = {
//     panoramas: []
// },

export type ItemType = {
  id: number | string
  nome: string
  capa: string | undefined
  descricao_t: string | null
  quartos: number
  leitos: number
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
}
