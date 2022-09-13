/* eslint linebreak-style: ["error", "unix"] */

import Input from '../../components/atoms/Input';
import Sidebar from '../../components/organisms/Sidebar';

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />

      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>

          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <img src="/img/avatar-1.png" width="90" height="90" className="avatar img-fluid" alt="avatar" />
                  <div
                    className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center"
                  >
                    <img src="/icon/upload.svg" alt="icon-upload" width={90} height={90} />
                  </div>
                </div>

                <div className="image-upload">
                  <label htmlFor="avatar">
                    <img src="/icon/upload.svg" alt="icon-upload" width={90} height={90} />
                  </label>
                  <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                </div>

              </div>

              <div className="pt-30">
                <Input label="Full Name" placeholder="Enter your full name" />
              </div>

              <div className="pt-30">
                <Input label="Email Address" placeholder="Enter your email address" />
              </div>

              <div className="pt-30">
                <Input label="Phone" placeholder="Enter your phone number" />
              </div>

              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
