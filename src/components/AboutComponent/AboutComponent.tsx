import { memo } from 'react'

import { AiOutlineGlobal } from 'react-icons/ai'
import { BsClock, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md'

import TitleH2Intern from 'components/TitleH2Intern'

import { ItemType } from 'types/ItemType'

import { DivIcon, StyledSmallText } from './style'

interface IPaymentProps {
  category: ItemType
}

const AboutComponent: React.FC<IPaymentProps> = ({ category }) => {
  return (
    <div>
      <TitleH2Intern title="Sobre" />
      {category.addresses &&
        category.addresses.map((address: { id: number; label: string }) => (
          <div className="d-flex align-items-center pb-4" key={address.id}>
            <MdOutlineLocationOn color="#6ebd00" size={36} className="pe-2" />
            <p className="m-0">{address.label}</p>
          </div>
        ))}
      {category.phones &&
        category.phones.map(
          (phone: {
            id: number
            number: string
            nome: string
            whatsapp: boolean
          }) => (
            <div className="d-flex align-items-center pb-3" key={phone.id}>
              {phone.whatsapp && (
                <BsWhatsapp color="#6ebd00" size={30} className="pe-2" />
              )}
              {!phone.whatsapp && (
                <BsTelephone color="#6ebd00" size={30} className="pe-2" />
              )}
              <div className="d-flex flex-column">
                <StyledSmallText className="m-0 ">{phone.nome}</StyledSmallText>
                <p className="m-0">{phone.number}</p>
              </div>
            </div>
          ),
        )}
      {category.email && (
        <div className="d-flex align-items-center pb-3">
          <MdOutlineEmail color="#6ebd00" size={30} className="pe-2" />
          <a href={`mailto:${category.email}`}>{category.email}</a>
        </div>
      )}
      {category.site && (
        <div className="d-flex align-items-center pb-3">
          <AiOutlineGlobal color="#6ebd00" size={30} className="pe-2" />
          <a href={category.site} target="_blank" rel="noreferrer">
            {category.site}
          </a>
        </div>
      )}
      {category.redes.map(
        (network: {
          icone: string
          nome: string
          user: string
          url: string
        }) => (
          <DivIcon
            key={network.nome}
            className="d-flex align-items-center pb-3"
          >
            <i className={network.icone} />
            <a href={network.url} target="_blank" rel="noreferrer">
              {network.user}
            </a>
          </DivIcon>
        ),
      )}
      {category?.horario_funcionamento?.length >= 1 && (
        <div className="d-flex align-items-start">
          <BsClock color="#6ebd00" size={20} className="me-4" />
          <table>
            <tbody>
              {category.horario_funcionamento.map(
                (workinghours: {
                  label: string
                  horario: { abre: string; fecha: string }
                  is24: boolean
                }) => (
                  <tr>
                    <td className="fw-bold pe-5" key={workinghours.label}>
                      {workinghours.label}
                    </td>
                    <td>
                      {workinghours.horario.abre} às{' '}
                      {workinghours.horario.fecha}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
export default memo(AboutComponent)
