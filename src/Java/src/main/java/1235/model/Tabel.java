package 1235.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 1235.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Табель
 */
@Entity(name = "IIS1235Табель")
@Table(schema = "public", name = "Табель")
public class Tabel {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КонецС")
    private String конецс;

    @Column(name = "НачалоС")
    private String началос;

    @OneToMany(mappedBy = "tabel", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Grafik> grafiks;


    public Tabel() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКонецС() {
      return конецс;
    }

    public void setКонецС(String конецс) {
      this.конецс = конецс;
    }

    public String getНачалоС() {
      return началос;
    }

    public void setНачалоС(String началос) {
      this.началос = началос;
    }


}