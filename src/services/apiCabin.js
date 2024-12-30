import supabase, { supaBaseUrl } from "./supabase";

export async function getCabin() {
  let { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("failed to load cabins");
  }

  return data;
}

// https://zlqamiacnaooafloyuga.supabase.co/storage/v1/object/public/Cabins/cabin-001.jpg

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supaBaseUrl);

  console.log(newCabin.image);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supaBaseUrl}/storage/v1/object/public/Cabins/${imageName}`;

  // 1. create/Edit a new cabin
  let query = supabase.from("Cabins");

  // create cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]).select();

  //edit cabin
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("failed to create a new cabin");
  }

  //2. upload image

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("Cabins")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("Cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("failed to upoad image and cabin");
  }

  return data;
}

export async function deleteCabins(id) {
  // Initialize the Supabase client
  const { error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("failed to delete cabin");
  }
}
