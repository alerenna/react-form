import PostCard from "./PostCard"

export default function Cards({ posts, onDelete }) {


    return (
        <>
            <div className="col">
                <div className="card-list p-3">
                    {posts.map((post) => (
                        <li key={`post-${post.id}`}
                            className="col-12 d-flex text-center p-2 align-items-center justify-content-center">
                            <PostCard post={post} onDelete={onDelete} />
                        </li>
                    ))}
                </div>
            </div>

        </>
    )

}
