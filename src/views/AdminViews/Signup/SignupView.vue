<template>
  <CoverLayout>
    <div class="signup-container">
      <div class="content">
        <!-- Form -->
        <form @submit.prevent="app.submitForm">
          <div class="content-title">
            <h1 class="title">{{ app.t(`app.createAccount`) }}</h1>
            <span>
              {{ app.t(`app.haveAccount`) }}
              <router-link :to="PathConst.adminSignin" class="link">{{ app.t(`app.signinHere`) }}</router-link>
            </span>
          </div>

          <div class="signup-google" v-if="app.isDisplayed.value">
            <button type="button" class="g-btn google-btn" @click.prevent="">
              <span class="item">
                <img src="@\assets\img\google.svg" alt="Google" class="image avatar" />
                {{ app.t(`app.signupGoogle`) }}
              </span>
            </button>
          </div>

          <div class="content-or" v-if="app.isDisplayed.value">
            <span class="divider text-muted">{{ app.t(`app.or`) }}</span>
          </div>

          <div class="invalid-input" v-if="app.errorInput.value">
            {{ app.errorInput.value }}
          </div>

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="username">
              {{ app.t(`app.username`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <input
              type="text"
              :class="['input-form', { 'is-invalid': app.errorUsername.value }]"
              name="username"
              id="username"
              :placeholder="app.t(`app.username`)"
              v-model="app.username.value"
              @focus="app.focusUsername"
            />

            <div class="invalid-feedback" v-if="app.errorUsername.value">{{ app.errorUsername.value }}</div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="password">
              {{ app.t(`app.password`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <input
              type="password"
              :class="['input-form', { 'is-invalid': app.errorPassword.value }]"
              name="password"
              id="password"
              :placeholder="app.t(`app.passwordRequired`)"
              v-model="app.password.value"
              @focus="app.focusPassword"
            />

            <div class="invalid-feedback" v-if="app.errorPassword.value">{{ app.errorPassword.value }}</div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="confirmPassword">
              {{ app.t(`app.confirmPassword`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <input
              type="password"
              :class="['input-form', { 'is-invalid': app.errorConfirmPassword.value }]"
              name="confirmPassword"
              id="confirmPassword"
              :placeholder="app.t(`app.passwordRequired`)"
              v-model="app.confirmPassword.value"
              @focus="app.focusConfirmPassword"
            />

            <div class="invalid-feedback" v-if="app.errorConfirmPassword.value">
              {{ app.errorConfirmPassword.value }}
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="organizationName">
              {{ app.t(`app.organizationName`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <input
              type="text"
              :class="['input-form', { 'is-invalid': app.errorName.value }]"
              name="name"
              id="organizationName"
              :placeholder="app.t(`app.organizationName`)"
              v-model="app.organizationName.value"
              @focus="app.focusName"
            />

            <div class="invalid-feedback" v-if="app.errorName.value">{{ app.errorName.value }}</div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="email">
              {{ app.t(`app.email`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <input
              type="email"
              :class="['input-form', { 'is-invalid': app.errorEmail.value }]"
              name="email"
              id="email"
              placeholder="Email@organization.com"
              v-model="app.email.value"
              @focus="app.focusEmail"
            />

            <div class="invalid-feedback" v-if="app.errorEmail.value">{{ app.errorEmail.value }}</div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="phoneNumber">
              {{ app.t(`app.phoneNumber`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <input
              type="text"
              :class="['input-form', { 'is-invalid': app.errorPhoneNumber.value }]"
              name="phoneNumber"
              id="phoneNumber"
              :placeholder="app.t(`app.phoneNumber`)"
              v-model="app.phoneNumber.value"
              @focus="app.focusPhoneNumber"
            />

            <div class="invalid-feedback" v-if="app.errorPhoneNumber.value">{{ app.errorPhoneNumber.value }}</div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="address">
              {{ app.t(`app.address`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <input
              type="text"
              :class="['input-form', { 'is-invalid': app.errorAddress.value }]"
              name="address"
              id="address"
              :placeholder="app.t(`app.address`)"
              v-model="app.address.value"
              @focus="app.focusAddress"
            />

            <div class="invalid-feedback" v-if="app.errorAddress.value">{{ app.errorAddress.value }}</div>
          </div>
          <!-- End Form Group -->

          <!-- Checkbox -->
          <div class="form-group">
            <div class="input-group">
              <input
                type="checkbox"
                :class="['custom-control-input', { 'is-invalid': app.errorTerms.value }]"
                name="termsCheckbox"
                id="termsCheckbox"
                v-model="app.termsAndConditions.value"
                @focus="app.focusTerms"
              />

              <label class="custom-control-label text-muted" for="termsCheckbox">
                {{ app.t(`app.iAccept`) }}
                <router-link to="" class="link">{{ app.t(`app.termsAndConditions`) }}</router-link></label
              >
            </div>

            <div class="invalid-feedback" v-if="app.errorTerms.value">{{ app.errorTerms.value }}</div>
          </div>
          <!-- End Checkbox -->

          <button type="submit" class="g-btn submit-btn">{{ app.t(`app.buttonCreate`) }}</button>

          <button type="submit" class="g-btn trial-btn" v-if="app.isDisplayed.value">
            {{ app.t(`app.startTrial`) }}
            <i class="tio-chevron-right"></i>
          </button>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </CoverLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import CoverLayout from "@/layouts/CoverLayout/CoverLayout.vue";
import { PathConst } from "@/const/path.const";
import { ValidateHelper } from "@/helpers/validate.helper";
import { useAuthStore } from "@/stores/auth.store";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public authStore = useAuthStore();

    public isDisplayed: Ref<boolean> = this.ref(false);
    public username: Ref<string> = this.ref("");
    public password: Ref<string> = this.ref("");
    public confirmPassword: Ref<string> = this.ref("");
    public organizationName: Ref<string> = this.ref("");
    public email: Ref<string> = this.ref("");
    public phoneNumber: Ref<string> = this.ref("");
    public address: Ref<string> = this.ref("");
    public termsAndConditions: Ref<Boolean> = this.ref(true);
    public errorInput: Ref<string> = this.ref("");
    public errorUsername: Ref<string> = this.ref("");
    public errorPassword: Ref<string> = this.ref("");
    public errorConfirmPassword: Ref<string> = this.ref("");
    public errorName: Ref<string> = this.ref("");
    public errorEmail: Ref<string> = this.ref("");
    public errorPhoneNumber: Ref<string> = this.ref("");
    public errorAddress: Ref<string> = this.ref("");
    public errorTerms: Ref<string> = this.ref("");

    public constructor() {
      super();
    }

    public submitForm = async () => {
      let isValidInput = true;
      if (!this.username.value) {
        this.errorUsername.value = this.t("message.errorUsername");
        isValidInput = false;
      } else {
        this.errorUsername.value = "";
      }
      ValidateHelper.checkValidPassword(this.password.value).forEach((value) => {
        this.errorPassword.value += this.t(value) + "\n";
      });
      if (this.errorPassword.value) {
        isValidInput = false;
      }
      if (this.confirmPassword.value !== this.password.value) {
        isValidInput = false;
        this.errorConfirmPassword.value = this.t(`message.errorConfirmPassword`);
      } else {
        this.errorConfirmPassword.value = "";
      }
      if (!this.organizationName.value) {
        this.errorName.value = this.t("message.errorName");
        isValidInput = false;
      } else {
        this.errorName.value = "";
      }
      if (!this.email.value || !ValidateHelper.isValidEmail(this.email.value)) {
        this.errorEmail.value = this.t("message.errorEmail");
        isValidInput = false;
      } else {
        this.errorEmail.value = "";
      }
      if (!this.phoneNumber.value || !ValidateHelper.isValidPhoneNumber(this.phoneNumber.value)) {
        isValidInput = false;
        this.errorPhoneNumber.value = this.t(`message.errorPhoneNumber`);
      } else {
        this.errorPhoneNumber.value = "";
      }
      if (!this.address.value) {
        this.errorAddress.value = this.t("message.errorAddress");
        isValidInput = false;
      } else {
        this.errorAddress.value = "";
      }

      if (!this.termsAndConditions.value) {
        this.errorTerms.value = this.t("message.errorTerms");
        isValidInput = false;
      } else {
        this.errorTerms.value = "";
      }

      if (isValidInput) {
        const data = {
          username: this.username.value,
          password: this.password.value,
          name: this.organizationName.value,
          email: this.email.value,
          phoneNumber: this.phoneNumber.value,
          address: this.address.value,
        };
        this.commonStore.setIsLoading(true);
        const isSuccess = await this.authStore.fetchOrganizationSignUp(data);
        if (isSuccess) {
          if (isSuccess.includes("Username")) {
            this.errorInput.value = this.t(`message.errorUsernameExists`);
            this.errorUsername.value = this.t("message.errorUsername");
          } else if (isSuccess.includes("Company Name")) {
            this.errorInput.value = this.t(`message.errorNameExists`);
            this.errorName.value = this.t("message.errorName");
          } else if (isSuccess.includes("Email ")) {
            this.errorInput.value = this.t(`message.errorEmailExists`, { value: this.email.value });
            this.errorEmail.value = this.t("message.errorEmail");
          } else {
            window.location.replace(PathConst.adminDashboard.path);
            // window.location.href = PathConst.adminDashboard.path;
            // this.router.push(PathConst.adminDashboard);
          }
        } else {
          this.errorInput.value = this.t(`message.errorUsernameOrPassword`);
        }
        this.commonStore.setIsLoading(false);
      }
    };

    public focusUsername = () => {
      if (this.errorUsername.value) {
        this.errorUsername.value = "";
      }
    };

    public focusPassword = () => {
      if (this.errorPassword.value) {
        this.errorPassword.value = "";
        this.password.value = "";
      }
    };

    public focusConfirmPassword = () => {
      if (this.errorConfirmPassword.value) {
        this.errorConfirmPassword.value = "";
        this.confirmPassword.value = "";
      }
    };

    public focusName = () => {
      if (this.errorName.value) {
        this.errorName.value = "";
      }
    };

    public focusEmail = () => {
      if (this.errorEmail.value) {
        this.errorEmail.value = "";
      }
    };

    public focusPhoneNumber = () => {
      if (this.errorPhoneNumber.value) {
        this.errorPhoneNumber.value = "";
      }
    };

    public focusAddress = () => {
      if (this.errorAddress.value) {
        this.errorAddress.value = "";
      }
    };

    public focusTerms = () => {
      if (this.errorTerms.value) {
        this.errorTerms.value = "";
      }
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.signup-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & .content {
    width: 100%;
    padding: 3rem 1rem;
    max-width: 25rem;

    & .content-title {
      text-align: center;
      margin-bottom: 2rem;

      & .title {
        font-size: 1.75rem;
        font-weight: 600;
        line-height: 1.4;
      }

      & span {
        margin-bottom: 1rem;
      }
    }

    & .signup-google {
      margin-bottom: 1.5rem;

      & .google-btn {
        color: $dark-variant;
        background-color: $white;
        border: 1px solid $border;

        &:hover {
          box-shadow: 0 3px 6px -2px rgba(140, 152, 164, 0.25);

          & .item {
            color: $blue;
          }
        }

        & .item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: $dark-variant;

          & .avatar {
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }

    & .content-or {
      text-align: center;
      margin-bottom: 1.5rem;

      & .divider {
        display: flex;
        align-items: center;

        &::before,
        &::after {
          content: "";
          flex: 1 1 0%;
          border-top: 0.0625rem solid $border;
          margin-top: 0.0625rem;
        }

        &::before {
          margin-right: 1.5rem;
        }

        &::after {
          margin-left: 1.5rem;
        }
      }
    }

    & .invalid-input {
      width: 100%;
      display: block;
      text-align: center;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
      color: $danger;
    }

    & .form-group {
      margin-bottom: 1.5rem;

      & .input-label {
        display: block;
        color: $black;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;

        & .input-label-secondary {
          color: $danger;
        }
      }

      & .input-form {
        display: block;
        width: 100%;
        height: calc(1.5em + 1.875rem);
        padding: 0.875rem 1.09375rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: $dark;
        background-color: $white;
        background-clip: padding-box;
        border: 0.0625rem solid $border;
        border-radius: 0.3125rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &::placeholder {
          color: #97a4af;
          opacity: 1;
        }

        &:focus {
          color: $dark;
          background-color: $white;
          outline: 0;
          border-color: rgba($blue, 0.6);
          box-shadow: 0 0 10px rgba(55, 125, 255, 0.1);
        }
      }

      & .is-invalid,
      & .is-invalid:focus {
        border-color: $danger;
        box-shadow: 0 0 10px rgba(237, 76, 120, 0.1);
      }

      & .is-valid,
      & .is-valid:focus {
        border-color: $success;
        box-shadow: 0 0 10px rgba(0, 201, 167, 0.1);
      }

      & .invalid-feedback {
        display: block;
        width: 100%;
        margin-top: 0.25rem;
        font-size: 80%;
        color: $danger;
        white-space: pre-line;
      }

      & .input-group {
        position: relative;
        z-index: 1;
        display: block;
        min-height: 1.4rem;
        padding-left: 1.5rem;

        & .custom-control-input {
          position: absolute;
          left: 0;
          z-index: -1;
          width: 1rem;
          height: 1.2rem;
          opacity: 0;
          border-radius: 0.25rem;
        }

        & .custom-control-label {
          position: relative;
          margin-bottom: 0;
          vertical-align: top;
          cursor: pointer;

          &::before {
            content: "";
            position: absolute;
            display: block;
            top: 0.2rem;
            left: -1.5rem;
            width: 1rem;
            height: 1rem;
            pointer-events: none;
            background-color: $white;
            border: 0.0625rem solid $border;
            border-radius: 0.25rem;
            transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          }

          &::after {
            content: "";
            position: absolute;
            display: block;
            top: 0.2rem;
            left: -1.5rem;
            width: 1rem;
            height: 1rem;
            background: no-repeat 50%/50% 50%;
          }
        }

        & .custom-control-input:checked ~ .custom-control-label::before {
          color: $white;
          border-color: $blue-light;
          background-color: $blue-light;
        }

        & .custom-control-input:checked ~ .custom-control-label::after {
          background-image: url("@/assets/img/check.svg");
        }

        & .custom-control-input.is-invalid ~ .custom-control-label::before {
          border-color: $danger;
          box-shadow: 0 0 10px rgba(237, 76, 120, 0.1);
        }
      }
    }

    & .submit-btn {
      color: $white;
      background-color: $blue-light;
      border-color: $blue-light;
      margin-bottom: 0.5rem;

      &:hover {
        background-color: $blue;
        border-color: $blue;
      }
    }

    & .trial-btn {
      color: $blue-light;
      background-color: transparent;
      border: transparent;
      margin-top: 0.5rem;

      font-weight: 600;

      &:hover {
        color: $blue;
      }
    }
  }
}
</style>
