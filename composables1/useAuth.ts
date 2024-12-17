export const useAuth = () => {
  /** Contains information about logged in user and workspace */
  const session = useState<Session | undefined>();

  async function getSession() {
    const result = await $fetch("https://httpbin.org/ip");
    session.value = result;
    return result;
  }

  return {
    getSession,
  };
};
