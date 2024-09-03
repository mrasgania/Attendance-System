

int main(){
    int arr1[]={1,2,3,4};
    int arr2[]={3,4,5,6};

    int arr3[2]={};

    int i=0;
    int j=0;
    int k=0;

    for(int i=0;i<sizeof(arr1)/sizeof(int);i++){
        for(int j=0;j<sizeof(arr2)/sizeof(int);j++){
            if(arr[i]==arr[j]){
                arr3[k]=arr[i];
                k++;
            }
        }
    }

    for(int i=0;i<sizeof(arr3)/sizeof(int);i++){
        cout<<arr3[i]<<endl;
    }
}