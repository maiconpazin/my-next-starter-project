import {
  CartFooter,
  Contact,
  QuotasSearchForm,
  QuotasTable,
  QuotasTitle,
} from '@/components/organisms';

export default function Quotas() {
  return (
    <main>
      <QuotasTitle />
      <QuotasSearchForm />
      <QuotasTable />
      <CartFooter />
      <Contact title='Não encontrou o crédito desejado? Fale conosco!' />
    </main>
  );
}
