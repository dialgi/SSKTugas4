
import LabeledInput from "../elements/LabeledInput";
import Button from "../elements/button";

const LoginForm = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
      </div>
      <Button variant="bg-blue-400 w-full text-white" type="submit">
        Login
      </Button>

      <Button variant="bg-blue-400 w-full text-white mt-4" type="submit">
        Forgot password
      </Button>
    </form>
  );
};

export default LoginForm;
