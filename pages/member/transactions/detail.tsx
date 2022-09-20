/* eslint linebreak-style: ["error", "unix"] */

import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent />
    </section>
  );
}
