export type AdressType = {
  addresses: [
    {
      id: number
      lat: number
      lng: number
      label: string
    },
  ]
}
export type ImagesType = {
  images: [
    {
      id: number
      legenda: {
        pt_BR: null
      }
      ordem: number
      src: string
    },
  ]
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
  categorias: [
    {
      id: number
      label: string
    },
  ]
}
export type StructureType = {
  estruturas: [
    {
      icone: string
      label: string
    },
  ]
}
export type NetworkType = {
  redes: [
    {
      nome: string
      icone: string
      url: string
      user: string
    },
  ]
}
export type PaymentType = {
  formas_pagamento: [
    {
      icone: string
      label: string
    },
  ]
}
export type RestrictionType = {
  restricoes: [
    {
      icone: string
      label: string
    },
  ]
}
export type MealType = {
  restricoes: [
    {
      label: string
    },
  ]
}

export type ItemType = {
  id: number
  nome: string | null
  capa: string | null
  lat: number | null
  lng: number | null
  category: CategoryType[] | null
  adress: AdressType[] | null
}
