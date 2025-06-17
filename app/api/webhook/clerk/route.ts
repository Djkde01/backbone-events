import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions";
import { CreateUserParams } from "@/types";
import { clerkClient } from "@clerk/nextjs/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const eventType = evt.type;

    if (eventType === "user.created") {
      const client = await clerkClient();
      const {
        id,
        email_addresses,
        first_name,
        last_name,
        image_url,
        username,
      } = evt.data;

      const user: CreateUserParams = {
        clerkId: id,
        email: email_addresses[0].email_address,
        firstName: first_name!,
        lastName: last_name!,
        imageUrl: image_url!,
        username: username!,
      };

      const newUser = await createUser(user);

      if (newUser) {
        await client.users.updateUserMetadata(id, {
          publicMetadata: { userId: newUser._id.toString() },
        });
      }

      return NextResponse.json(
        { message: "User created successfully" },
        { status: 200 }
      );
    }

    if (eventType === "user.updated") {
      const { id, image_url, first_name, last_name, username } = evt.data;

      const user = {
        firstName: first_name!,
        lastName: last_name!,
        username: username!,
        photo: image_url,
      };

      const updatedUser = await updateUser(id, user);

      return NextResponse.json({ message: "OK", user: updatedUser });
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;

      const deletedUser = await deleteUser(id!);

      return NextResponse.json({ message: "OK", user: deletedUser });
    }
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
