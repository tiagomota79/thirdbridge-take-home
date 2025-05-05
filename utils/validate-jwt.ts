import jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";

interface JWKS {
  keys: Array<{
    kty: "RSA";
    use: string;
    kid: string;
    x5c: string[];
    n: string;
    e: string;
  }>;
}

async function getPublicKey() {
  const response = await fetch(
    "https://dev-axjtf077.us.auth0.com/.well-known/jwks.json"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch public key");
  }
  const jwks: JWKS = await response.json();

  const signingKey = jwks.keys.find((key) => key.use === "sig");
  if (!signingKey) {
    throw new Error("No signing key found in JWKS");
  }

  return jwkToPem(signingKey);
}

export async function validateJwt(token: string) {
  const publicKey = await getPublicKey();
  const decoded = jwt.verify(token, publicKey, {
    algorithms: ["RS256", "HS256"],
  }) as jwt.JwtPayload;

  return {
    name: decoded.name || decoded.sub,
    email: decoded.email,
  };
}
