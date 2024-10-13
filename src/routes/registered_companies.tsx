import { Input } from '@/components/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useState } from 'react'

type companiesType = {
  id: number
  city: string
  companyName: string
  typeOfHelp: string
  name: string
  contact: string
}

const tableHeads = [
  'cidade',
  'name da empresa',
  'tipo de ajuda',
  'nome',
  'contato',
]

const registeredCompaniesList: companiesType[] = [
  {
    id: 1,
    city: 'Porto Alegre',
    companyName: 'Soluções Verdes',
    typeOfHelp: 'Doação',
    name: 'Ana Clara',
    contact: '(51) 99999-1234',
  },
  {
    id: 2,
    city: 'Caxias do Sul',
    companyName: 'Vinhos da Serra',
    typeOfHelp: 'Desconto',
    name: 'João Pedro',
    contact: '(51) 98888-5678',
  },
  {
    id: 3,
    city: 'Pelotas',
    companyName: 'Delícias do Sul',
    typeOfHelp: 'Voluntariado',
    name: 'Sofia Almeida',
    contact: '(51) 97777-2345',
  },
  {
    id: 4,
    city: 'Santa Maria',
    companyName: 'Tech Inovações',
    typeOfHelp: 'Atendimento Psicológico',
    name: 'Lucas Gomes',
    contact: '(51) 96666-7890',
  },
  {
    id: 5,
    city: 'Canoas',
    companyName: 'Estética Natural',
    typeOfHelp: 'Doação',
    name: 'Maria Fernanda',
    contact: '(51) 95555-4321',
  },
  {
    id: 6,
    city: 'Novo Hamburgo',
    companyName: 'Sapatos Confortáveis',
    typeOfHelp: 'Desconto',
    name: 'Renata Martins',
    contact: '(51) 99988-7654',
  },
  {
    id: 7,
    city: 'Gravataí',
    companyName: 'Livraria do Sul',
    typeOfHelp: 'Voluntariado',
    name: 'Carlos Alberto',
    contact: '(51) 98877-6543',
  },
  {
    id: 8,
    city: 'Rio Grande',
    companyName: 'Pizzaria Marítima',
    typeOfHelp: 'Atendimento Psicológico',
    name: 'Thiago Lima',
    contact: '(51) 96655-4321',
  },
  {
    id: 9,
    city: 'Santa Cruz do Sul',
    companyName: 'Cafeteria Aroma',
    typeOfHelp: 'Desconto',
    name: 'Jéssica Ribeiro',
    contact: '(51) 95544-3210',
  },
  {
    id: 10,
    city: 'Bagé',
    companyName: 'Moda Gaúcha',
    typeOfHelp: 'Voluntariado',
    name: 'André Gonçalves',
    contact: '(51) 94443-2109',
  },
  {
    id: 11,
    city: 'São Leopoldo',
    companyName: 'Auto Peças do Vale',
    typeOfHelp: 'Doação',
    name: 'Fábio Mendes',
    contact: '(51) 93332-1098',
  },
  {
    id: 12,
    city: 'Canoas',
    companyName: 'Clínica de Saúde',
    typeOfHelp: 'Atendimento Psicológico',
    name: 'Mariana Silva',
    contact: '(51) 92221-0987',
  },
]

export function RegisteredCompanies() {
  const [filter, setFilter] = useState('')

  const filteredCompanies = registeredCompaniesList.filter(
    company =>
      company.city.toLowerCase().includes(filter.toLowerCase()) ||
      company.companyName.toLowerCase().includes(filter.toLowerCase()) ||
      company.typeOfHelp.toLowerCase().includes(filter.toLowerCase()) ||
      company.name.toLowerCase().includes(filter.toLowerCase()) ||
      company.contact.includes(filter)
  )

  return (
    <div className="flex flex-col flex-1">
      <input
        type="text"
        placeholder="Filtrar empresas..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="w-2/5 px-3 py-2 mb-4 text-sm text-white bg-transparent border rounded-md outline-none border-laranjaSenac"
      />

      <Table className="text-white">
        <TableHeader>
          <TableRow>
            {tableHeads.map(tableHead => (
              <TableHead key={tableHead} className="font-bold capitalize">
                {tableHead}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCompanies.map(
            ({ id, city, companyName, typeOfHelp, name, contact }) => (
              <TableRow key={id}>
                <TableCell className="font-medium">{city}</TableCell>
                <TableCell>{companyName}</TableCell>
                <TableCell>{typeOfHelp}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{contact}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  )

  /*  return (
    <div className="flex flex-1">
      <Table className="text-white">
        <TableHeader>
          <TableRow>
            {tableHeads.map(tableHead => (
              <TableHead key={tableHead} className="font-bold capitalize">
                {tableHead}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {registeredCompaniesList.map(
            ({ id, city, companyName, typeOfHelp, name, contact }) => (
              <TableRow key={id}>
                <TableCell className="font-medium">{city}</TableCell>
                <TableCell>{companyName}</TableCell>
                <TableCell>{typeOfHelp}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{contact}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  ) */
}
