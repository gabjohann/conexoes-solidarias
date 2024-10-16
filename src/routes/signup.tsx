import { BeneficiarySignUpForm } from '@/components/beneficiary-sign-up-form'
import { CompanySignUpForm } from '@/components/company-sign-up-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function SignUpForm() {
  return (
    <div className="flex items-center flex-1">
      <div className="flex-col flex-1">
        <Tabs defaultValue="company">
          <TabsList className="mb-8">
            <TabsTrigger value="beneficiary">Beneficiário</TabsTrigger>
            <TabsTrigger value="company">Empresa</TabsTrigger>
          </TabsList>
          <TabsContent value="beneficiary">
            <BeneficiarySignUpForm />
          </TabsContent>
          <TabsContent value="company">
            <CompanySignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
