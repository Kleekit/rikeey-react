const { useState, useEffect } = require("react");
const { getUser } = require("../methods/cart.method");

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isUser, setIsUser] = useState(false);

  const handleGetUser = async () => {
    const user = await getUser();
    if (user) {
      console.log(user);
      setUser(user);
      setIsUser(true);
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);
  return { user };
};
