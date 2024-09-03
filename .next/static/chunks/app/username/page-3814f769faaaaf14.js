(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9391:function(){},8493:function(e,r,a){Promise.resolve().then(a.bind(a,1729))},1729:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return E}});var t=a(3502),n=a(3984),s=a(1597),i=a(479);function d(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return(0,i.m6)((0,s.W)(r))}let c=n.forwardRef((e,r)=>{let{className:a,...n}=e;return(0,t.jsx)("div",{ref:r,className:d("rounded-lg border bg-card text-card-foreground shadow-sm",a),...n})});c.displayName="Card";let l=n.forwardRef((e,r)=>{let{className:a,...n}=e;return(0,t.jsx)("div",{ref:r,className:d("flex flex-col space-y-1.5 p-6",a),...n})});l.displayName="CardHeader";let o=n.forwardRef((e,r)=>{let{className:a,...n}=e;return(0,t.jsx)("h3",{ref:r,className:d("text-2xl font-semibold leading-none tracking-tight",a),...n})});o.displayName="CardTitle";let u=n.forwardRef((e,r)=>{let{className:a,...n}=e;return(0,t.jsx)("p",{ref:r,className:d("text-sm text-muted-foreground",a),...n})});u.displayName="CardDescription";let f=n.forwardRef((e,r)=>{let{className:a,...n}=e;return(0,t.jsx)("div",{ref:r,className:d("p-6 pt-0",a),...n})});f.displayName="CardContent";let m=n.forwardRef((e,r)=>{let{className:a,...n}=e;return(0,t.jsx)("div",{ref:r,className:d("flex items-center p-6 pt-0",a),...n})});m.displayName="CardFooter";var b=a(4347),g=a(2072);let p=(0,g.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),h=n.forwardRef((e,r)=>{let{className:a,...n}=e;return(0,t.jsx)(b.f,{ref:r,className:d(p(),a),...n})});h.displayName=b.f.displayName;let x=n.forwardRef((e,r)=>{let{className:a,type:n,...s}=e;return(0,t.jsx)("input",{type:n,className:d("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:r,...s})});x.displayName="Input";var y=a(6998);let v=(0,g.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),w=n.forwardRef((e,r)=>{let{className:a,variant:n,size:s,asChild:i=!1,...c}=e,l=i?y.g7:"button";return(0,t.jsx)(l,{className:d(v({variant:n,size:s,className:a})),ref:r,...c})});w.displayName="Button";var j=a(1746),N=a(1055),z=a(1945);z.z.object({title:z.z.string().min(1,"Title is required"),description:z.z.string().min(1,"Description is required"),label:z.z.string().min(1,"Label is required"),imageUrl:z.z.string().url("Invalid image URL"),price:z.z.string().min(1,"Price is required"),stock:z.z.string().min(1,"Stock is required"),name:z.z.string().min(1,"Stock is required")});let $=z.z.object({username:z.z.string().min(7,"Username must be at least 7 characters long").max(30,"Username must not exceed 30 characters").regex(/^[a-zA-Z0-9_]+$/,"Username can only contain letters, numbers, and underscores"),walletAddress:z.z.string().refine(e=>{try{return new N.PublicKey(e),!0}catch(e){return!1}},{message:"Invalid address"})});z.z.object({walletAddress:z.z.string().refine(e=>{try{return new N.PublicKey(e),!0}catch(e){return!1}},{message:"Invalid address"}),name:z.z.string().min(1,"Name is required").max(100,"Name must not exceed 100 characters"),emailAddress:z.z.string().email("Invalid email address")}),z.z.object({title:z.z.string().min(1,{message:"Title is required and cannot be empty."}),icon:z.z.string().min(1,{message:"Icon is required and cannot be empty."}),description:z.z.string().min(1,{message:"Description is required and cannot be empty."}),label:z.z.string().min(1,{message:"Label is required and cannot be empty."}),sellerWallet:z.z.string().refine(e=>{try{return new N.PublicKey(e),!0}catch(e){return!1}},{message:"Invalid address"})});var k=a(36),C=a(9348);function A(e){let{publickey:r}=e,[a,s]=(0,n.useState)(""),[i]=(0,n.useState)(r),d=(0,C.useRouter)(),b=async e=>{if(e.preventDefault(),!a){j.Am.warning("Enter the username");return}if(a.length<7){j.Am.warning("Username length should be more than 6 characters");return}let r={username:a,walletAddress:i};try{await $.parse(r);let e=await (0,k.VC)(r);e.err?j.Am.warning(e.msg):(j.Am.success("Username created successfully!"),d.push("/dashboard"))}catch(e){j.Am.error("An error occurred. Please try again."),console.error(e)}};return(0,t.jsx)(c,{className:"w-full max-w-md",children:(0,t.jsxs)("form",{onSubmit:b,children:[(0,t.jsxs)(l,{children:[(0,t.jsx)(o,{children:"Connect Your Wallet"}),(0,t.jsx)(u,{children:"Enter your username and wallet address to get started."})]}),(0,t.jsxs)(f,{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(h,{htmlFor:"username",children:"Username"}),(0,t.jsx)(x,{id:"username",placeholder:"Enter your username",value:a,onChange:e=>s(e.target.value),required:!0,minLength:7})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(h,{htmlFor:"wallet",children:"Wallet Address"}),(0,t.jsx)(x,{id:"wallet",placeholder:"Enter your wallet address",value:i,readOnly:!0})]})]}),(0,t.jsx)(m,{children:(0,t.jsx)(w,{type:"submit",className:"ml-auto",children:"Create"})})]})})}var q=a(7162);function R(){return(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-background",children:(0,t.jsx)("div",{className:"animate-spin rounded-full border-4 border-primary border-t-transparent shadow-lg shadow-primary/50 h-16 w-16"})})}function E(){let{publicKey:e,connected:r}=(0,q.O)(),a=(0,C.useRouter)(),[s,i]=(0,n.useState)(!0);return((0,n.useEffect)(()=>{r&&e?i(!1):a.push("/")},[r,e,a]),s)?(0,t.jsx)(R,{}):(0,t.jsx)("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:e&&r&&(0,t.jsx)(A,{publickey:e.toString()})})}},36:function(e,r,a){"use strict";a.d(r,{VC:function(){return n},_p:function(){return s}}),a(9502);var t=a(6171);(0,t.$)("2f8af0f237d5a4ef476958622bfae63d345ea639"),(0,t.$)("e32659acb77bbd8a0dca4dd12909d25f12fe0117");var n=(0,t.$)("8a6991020e14cd5d7799c3a13ed3282f9b8854db");(0,t.$)("4590af1a1e27258ee608ce0e3c4609383d30df50"),(0,t.$)("ad95deb06f797258648b865b2eb8eaf5997cd40f"),(0,t.$)("4befb589205bef5219ad6dfc80a9a05dbe4ebbed"),(0,t.$)("b982b059b68286395802cba79e77d0c3b454c8fe");var s=(0,t.$)("72e458cafc823f3d27fb4ce29b2948c55997ea10");(0,t.$)("651402e784eb49ee893c96a5b559dbb661f3a56a"),(0,t.$)("a1b96ebeac908b72af3660401f01b2473f0ccc5a"),(0,t.$)("153657afcfc6ac53e2d48e24559cc7e5e0e11058"),(0,t.$)("7ee92ee4437ed62713062fc04585ddee9d1b1d48"),(0,t.$)("883a806ac109f1b14277807d97790f2c4d957c7d"),(0,t.$)("3bfe4d73cd4cc309d8a8137ca0ae7e7dfd4ef6f3"),(0,t.$)("b9a092a43711149ac7cb6df9abcc9a7f281c840e"),(0,t.$)("e1b314bbb7ba5be7c8921f70e84b3650d6ec2091"),(0,t.$)("6621a6dc59f14ed1ecba5d7ec567154ced984cbd")}},function(e){e.O(0,[71,704,488,385,613,24,744],function(){return e(e.s=8493)}),_N_E=e.O()}]);