import { useForm } from "react-hook-form";
import { Button, Input, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: "",
            content: "",
            status: true
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        const dbPost = appwriteService.createPost({...data, email: userData.email});
        navigate('my-posts')
    };

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                {/* <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} /> */}
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    rows={10}
                    className="border p-2 w-full"
                    placeholder="Enter your content here..."
                    {...register("content", { required: true })}
                />
            </div>
            <div className="w-1/3 px-2 py-10">
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-yellow-500" : undefined} className="w-full py-7">
                    POST
                </Button>
            </div>
        </form>
    );
}
