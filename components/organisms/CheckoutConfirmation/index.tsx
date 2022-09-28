import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { setCheckout } from '../../../services/player';

export default function CheckoutConfirmation() {
  const [checkbox, setCheckbox] = useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    const dataItemString = localStorage.getItem('data-item');
    const dataTopupString = localStorage.getItem('data-topup');

    const dataItemJSON = JSON.parse(dataItemString!);
    const dataTopupJSON = JSON.parse(dataTopupString!);

    if (!checkbox) {
      toast.error('Pastikan anda telah melakukan pembayaran!');
    }

    const data = {
      voucher: dataItemJSON._id,
      nominal: dataTopupJSON.nominalItem._id,
      payment: dataTopupJSON.paymentItem.payment._id,
      bank: dataTopupJSON.paymentItem.bank._id,
      name: dataTopupJSON.bankAccountName,
      accountUser: dataTopupJSON.verifyID,
    };

    const response = await setCheckout(data);

    if (response.error) {
      toast.error('Checkout gagal');
    } else {
      toast.success('Checkout Berhasil!');
      router.push('/complete-checkout');
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
        <span className="checkmark" />
      </label>

      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
