const useFetch = () => {
  let returnValue: { ok: boolean; data: any };

  const fetchData = async (
    endpoint: string,
    method: string | undefined,
    body: object | undefined
  ) => {
    const res = await fetch(import.meta.env.VITE_SERVER + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (res.ok) {
      if (data.status === "error") {
        returnValue = { ok: false, data };
      } else {
        returnValue = { ok: true, data };
      }
    } else {
      if (data?.errors && Array.isArray(data.errors)) {
        const responses: string[] = data.errors.map(
          (item: any) => item.msg | item.message
        );
        returnValue = { ok: false, data: responses };
      } else if (data?.status === "error") {
        returnValue = { ok: false, data };
      } else {
        console.log(data);
        returnValue = { ok: false, data: "An error has occured" };
      }
    }
  };
};
