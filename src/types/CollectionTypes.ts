export type CategoryType = {
  id: number
  label: string
}

export type AddressType = {
  id: number
  lat: number
  lng: number
  label: string | undefined
}

export type CollectionType = {
  id: number
  nome: string | null
  capa: string | undefined
  lat: number | null
  lng: number | null
  enderecos: AddressType[]
}
