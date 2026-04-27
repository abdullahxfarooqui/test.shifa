import { authenticateUser, issueMockJwt } from "@/lib/mock-db";

export async function POST(request: Request) {
  const body = (await request.json()) as { username?: string; password?: string };

  if (!body.username || !body.password) {
    return Response.json({ error: "Username and password are required." }, { status: 400 });
  }

  const user = authenticateUser(body.username, body.password);
  if (!user) {
    return Response.json({ error: "Invalid credentials." }, { status: 401 });
  }

  return Response.json({ token: issueMockJwt(user.id), user: { id: user.id, username: user.username } });
}
