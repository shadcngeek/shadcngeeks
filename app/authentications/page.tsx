import AuthenticationComponent from "@/components/authentication/acme/authentication-component";
import SimpleForm from "@/components/authentication/simple-form";

export default function AuthenticationPage() {
  return (
    <div className="space-y-5">
      <SimpleForm />
      <AuthenticationComponent />
    </div>
  );
}
